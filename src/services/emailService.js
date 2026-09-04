/**
 * Email submission service for Sustainable Wooden Decking & Flooring SA (SWDF SA)
 * Sends form data directly to swdandflooringsa@gmail.com using FormSubmit AJAX endpoint.
 */

const TARGET_EMAIL = 'swdandflooringsa@gmail.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

/**
 * Submit form data to swdandflooringsa@gmail.com
 * @param {Object} data - Key-value pairs representing form fields
 * @param {string} subject - Email subject line
 * @returns {Promise<{success: boolean, needsActivation?: boolean, message: string, error?: string}>}
 */
export async function sendEmailForm(data, subject = 'New Form Submission - SWDF SA') {
  try {
    const payload = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      ...data,
      submitted_at: new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }),
      source_website: 'Sustainable Wooden Decking & Flooring SA'
    };

    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server responded with status ${response.status}`);
    }

    const result = await response.json();
    const isSuccess = result.success === true || result.success === 'true';
    const isActivation = typeof result.message === 'string' && result.message.toLowerCase().includes('activation');

    if (isSuccess || isActivation) {
      return { 
        success: true, 
        needsActivation: isActivation,
        message: result.message || 'Email sent successfully!' 
      };
    }

    return {
      success: false,
      error: result.message || 'Submission error.'
    };
  } catch (error) {
    console.error('Email submission error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to dispatch email. Please reach out via WhatsApp or call us directly.' 
    };
  }
}

/**
 * Generate a mailto fallback URL with pre-filled form fields
 * @param {Object} data 
 * @param {string} subject 
 * @returns {string}
 */
export function getMailtoFallback(data, subject = 'SWDF SA Project Inquiry') {
  const body = Object.entries(data)
    .filter(([k]) => !k.startsWith('_'))
    .map(([key, val]) => `${key}: ${val}`)
    .join('\n');
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export { TARGET_EMAIL };
