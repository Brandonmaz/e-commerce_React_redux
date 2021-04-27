import bcrypt from "bcryptjs";
const Data = {
  users: [
    {
      name: "Brandon",
      email: "bmaz_02@yahoo.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Brandon",
        logo: "/images/logo.png",
        description: "Top seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "Banu",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Artisan Hand Painted Earthenware",
      category: "Ceramics",
      image: "/images/p1.jpeg",
      price: 90,
      countInStock: 10,
      brand: "Pottery",
      rating: 5,
      numReviews: 12,
      description:
        "Sculpted and finished by hand to look like timeworn antiques, these rustic vases add an element of charm and character. For a collected look, try placing multiples together, bringing them to life with your favorite botanicals.",
    },
    {
      name: "Urbana Ceramic Bud Vases",
      category: "Ceramics",
      image: "/images/p2.jpeg",
      price: 110,
      countInStock: 30,
      brand: "Pottery",
      rating: 3.5,
      numReviews: 16,
      description:
        "Sculpted by the hands of artisans, this collection of bud vases is our modernization of a heritage craft. With barely-there ridges and clean silhouettes, they features matte finishes of dreamy white and jet black. Display earthy green branches and bright, energizing florals to add pops of color.",
    },
    {
      name: "Hunter Handmade Collection",
      category: "Ceramics",
      image: "/images/p3.jpeg",
      price: 170,
      countInStock: 0,
      brand: "Pottery",
      rating: 4.5,
      numReviews: 20,
      description:
        "Embracing the beauty in imperfection, the Hunter Handmade Terra Cotta Collection is a medley of stunning handmade ceramics drenched in a glossy green glaze. Parts of the pieces are left unfinished, showcasing the earthy quality of terra-cotta in a homespun way.",
    },
    {
      name: "Hand Painted Planters",
      category: "Ceramics",
      image: "/images/p4.jpeg",
      price: 320,
      countInStock: 15,
      brand: "Pottery",
      rating: 4,
      numReviews: 25,
      description:
        "Glazed with a contrasting fleur-de-lys pattern, this ceramic cachepot has an unfinished rim and foot for rustic, artisanal appeal. Simply add a favorite house plant or any of our faux botanicals for an eye-catching display or housewarming gift.",
    },
    {
      name: "Modern Black Planter",
      category: "Ceramics",
      image: "/images/p5.jpeg",
      price: 150,
      countInStock: 12,
      brand: "Pottery",
      rating: 5,
      numReviews: 18,
      description:
        "Take your houseplant style up a notch with these sleek, modern ceramic planters. Designed with a deep saucer to protect your surfaces and create stylish dimension, the black finish really lets your foliage pop.",
    },
    {
      name: "Lilian Hand Painted Vases",
      category: "Ceramics",
      image: "/images/p6.jpeg",
      price: 220,
      countInStock: 10,
      brand: "Pottery",
      rating: 4.5,
      numReviews: 3,
      description:
        "A floral print adds delicate contrast to the rustic features of this vase.",
    },
    {
      name: "Tuscan Handcrafted Vases",
      category: "Ceramics",
      image: "/images/p7.jpeg",
      price: 70,
      countInStock: 0,
      brand: "Pottery",
      rating: 4.5,
      numReviews: 20,
      description:
        "These amply sized ceramics evoke the feeling of the Italian countryside. Each terra cotta piece is hand thrown and hand glazed in white with a rustic crackle finish.",
    },
    {
      name: "Ethan Metal & Ceramic Lights",
      category: "Ceramics",
      image: "/images/p8.jpeg",
      price: 320,
      countInStock: 15,
      brand: "Pottery",
      rating: 4,
      numReviews: 25,
      description:
        "Vintage crockery inspired the shapes of these ceramic shades, making our Ethan Linear Multi-Pendant a perfect choice for illuminating a counter, kitchen island or breakfast nook. The staggered heights allow the light to cast a radiating glow.",
    },
    {
      name: "Layla Ceramic Vases",
      category: "Ceramics",
      image: "/images/p9.jpeg",
      price: 150,
      countInStock: 12,
      brand: "Pottery",
      rating: 5,
      numReviews: 18,
      description:
        "Decidedly global, the Layla Ceramic Vases capture the spirit of found, one-of-a-kind objects. Use them to add style and height to your favorite houseplants.",
    },
    {
      name: "Eclectic Villa Planters",
      category: "Ceramics",
      image: "/images/p10.jpeg",
      price: 320,
      countInStock: 10,
      brand: "Pottery",
      rating: 4.5,
      numReviews: 3,
      description:
        "Reminiscent of those found in European gardens, our Eclectic Villa Planters have the look of vintage finds. Handcrafted of terra cotta and hand painted with a weathered finish, these large planters have an eye-catching presence in a patio or garden.",
    },
  ],
};
export default Data;
