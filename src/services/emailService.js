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
 * @returns {Promise<{success: boolean, message: string}>}
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
    return { success: true, message: result.message || 'Email sent successfully!' };
  } catch (error) {
    console.error('Email submission error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to dispatch email. Please reach out via WhatsApp or call us directly.' 
    };
  }
}

export { TARGET_EMAIL };
