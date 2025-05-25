export function stripTags(input: string): string {
    return input
        .replace(/<[^>]*>/g, '')       // HTML etiketlerini sil
        .replace(/[\n\r\t]+/g, ' ')    // Satır sonu, tab gibi karakterleri boşluk yap
        .replace(/\s+/g, ' ')          // Birden fazla boşluğu tek boşluk yap
        .trim();
}