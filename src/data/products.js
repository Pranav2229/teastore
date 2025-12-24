import expand1 from '../assets/Images/expand1.png'
import tea1 from '../assets/Images/tea1.png'
import tea2 from '../assets/Images/tea2.png'
import tea3 from '../assets/Images/tea3.png'
import tea4 from '../assets/Images/tea4.png'
import tea5 from '../assets/Images/tea5.png'
import tea6 from '../assets/Images/tea6.png'
import tea7 from '../assets/Images/tea7.png'
import tea8 from '../assets/Images/tea8.png'

const products = [
  {
    id: 1,
    title: "Ceylon Ginger",
    subtitle: "Ceylon Ginger Cinnamon chai tea",
    price: "€4.85 / 50 g",
    image: expand1,
    description: "A lovely warming Chai tea with ginger cinnamon flavours.",
    origin: "Iran",
    organic: true,
    vegan: true,
    caffeine: "Medium",
    variants: ["50g", "100g", "250g", "1kg"]
  },
  {
    id: 2,
    title: "Green Tea",
    subtitle: "Refreshing green tea",
    price: "€4.50 / 50 g",
    image: tea1,
    description: "Light and fresh green tea rich in antioxidants.",
    origin: "China",
    organic: true,
    vegan: true,
    caffeine: "Low",
    variants: ["50g", "100g"]
  },
  {
    id: 3,
    title: "Matcha",
    subtitle: "Premium Japanese matcha",
    price: "€9.90 / 30 g",
    image: tea2,
    description: "Stone-ground ceremonial grade Japanese matcha.",
    origin: "Japan",
    organic: true,
    vegan: true,
    caffeine: "High",
    variants: ["30g", "60g"]
  },
  {
    id: 4,
    title: "Rooibos",
    subtitle: "Caffeine-free herbal tea",
    price: "€3.95 / 50 g",
    image: tea3,
    description: "Smooth, naturally sweet rooibos tea.",
    origin: "South Africa",
    organic: false,
    vegan: true,
    caffeine: "None",
    variants: ["50g", "100g"]
  },
  {
    id: 5,
    title: "White Tea",
    subtitle: "Delicate white tea",
    price: "€6.20 / 50 g",
    image: tea4,
    description: "Light and subtle white tea with floral notes.",
    origin: "China",
    organic: true,
    vegan: true,
    caffeine: "Low",
    variants: ["50g"]
  },
  {
    id: 6,
    title: "Black Tea",
    subtitle: "Strong and bold black tea",
    price: "€4.10 / 50 g",
    image: tea5,
    description: "Full-bodied black tea with a rich aroma.",
    origin: "India",
    organic: false,
    vegan: true,
    caffeine: "High",
    variants: ["50g", "100g", "250g"]
  },
  {
    id: 7,
    title: "Herbal Tea",
    subtitle: "Relaxing herbal blend",
    price: "€3.80 / 50 g",
    image: tea6,
    description: "Calming caffeine-free herbal infusion.",
    origin: "Mixed",
    organic: true,
    vegan: true,
    caffeine: "None",
    variants: ["50g", "100g"]
  },
  {
    id: 8,
    title: "Oolong Tea",
    subtitle: "Smooth oolong tea",
    price: "€5.60 / 50 g",
    image: tea7,
    description: "Traditional oolong tea with balanced flavour.",
    origin: "China",
    organic: false,
    vegan: true,
    caffeine: "Medium",
    variants: ["50g", "100g"]
  },
  {
    id: 9,
    title: "Teaware",
    subtitle: "Premium teaware collection",
    price: "€12.00",
    image: tea8,
    description: "Elegant teaware for perfect tea moments.",
    origin: "Japan",
    organic: false,
    vegan: true,
    caffeine: "N/A",
    variants: ["Cup", "Teapot", "Sampler"]
  }
]

export default products
