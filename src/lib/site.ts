export const BRAND = 'Cheaper Tours & Travel'
export const BRAND_SHORT = 'Cheaper Tours'
export const PHONE_DISPLAY = '+63 936 023 7167'
export const PHONE_TEL = '+639360237167'
const WHATSAPP = '639380781501'

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const peso = (n: number) => `₱${n.toLocaleString('en-PH')}`
