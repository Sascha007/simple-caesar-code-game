/**
 * Encrypts text using Caesar cipher
 * @param text - The plaintext to encrypt
 * @param shift - The shift value (0-25)
 * @returns The encrypted text
 */
export function caesarEncrypt(text: string, shift: number): string {
  // Validate inputs
  if (typeof text !== 'string') {
    throw new TypeError('Text must be a string');
  }
  if (typeof shift !== 'number' || !isFinite(shift)) {
    throw new TypeError('Shift must be a finite number');
  }
  
  // Normalize shift to 0-25 range
  const normalizedShift = ((shift % 26) + 26) % 26;
  
  return text
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = code >= 65 && code <= 90;
        const base = isUpperCase ? 65 : 97;
        return String.fromCharCode(((code - base + normalizedShift) % 26) + base);
      }
      return char;
    })
    .join('');
}

/**
 * Decrypts text using Caesar cipher
 * @param text - The encrypted text
 * @param shift - The shift value (0-25)
 * @returns The decrypted text
 * 
 * Note: Decryption with shift N is equivalent to encryption with shift (26-N)
 * because shifting backward N positions is the same as shifting forward (26-N) positions
 */
export function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, 26 - (shift % 26));
}

/**
 * Normalizes text for comparison (lowercase, no extra spaces)
 * Removes potentially dangerous characters and ensures safe text handling
 */
export function normalizeText(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }
  // Remove any control characters and normalize whitespace
  return text
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // eslint-disable-line no-control-regex -- Remove control characters for security
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}
