
export class RandomUtils {
  /**
   * Generate random alphabetic text.
   * Example: RandomUtils.randomText(8) -> "Abcdefgh"
   */
  static randomText(length: number = 8): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  /**
   * Generate a random integer between min and max (inclusive).
   * Example: RandomUtils.randomNumber(100, 999) -> 472
   */
  static randomNumber(min: number = 1, max: number = 9999): number {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
      throw new Error('min and max must be integers, with min <= max');
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generate random alphanumeric text.
   * Example: RandomUtils.randomAlphaNumeric(10) -> "Ab3xK7pQ2m"
   */
  static randomAlphaNumeric(length: number = 10): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
  }

  /**
   * Generate a random email address.
   * Example: user.a8k29@example.com
   */
  static randomEmail(): string {
    return `user.${Date.now()}.${RandomUtils.randomAlphaNumeric(6)}@example.com`;
  }

  /**
   * Generate a unique test name.
   * Example: Employee_K7mP2x
   */
  static randomName(prefix: string = 'Test'): string {
    return `${prefix}_${RandomUtils.randomAlphaNumeric(6)}`;
  }
}