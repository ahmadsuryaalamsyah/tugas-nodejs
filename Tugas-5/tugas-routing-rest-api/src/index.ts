import express, { Request, Response } from 'express';
const PORT = 3000;
const app = express();
app.use(express.json());

function init() {
  interface Category {
    id: number;
    name: string;
  }

  interface Product {
    id: number;
    name: string;
    category: string;
  }

  let categories: Category[] = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
  ];

  let products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' },
  ];

  app.get('/categories', (req: Request, res: Response) => {
    res.json(categories);
  });

  app.get('/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  app.post('/categories', (req: Request, res: Response) => {
    const newCategory: Category = {
      id: categories.length + 1,
      name: req.body.name,
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
  });

  app.put('/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
      category.name = req.body.name;
      res.json(category);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  app.delete('/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex((cat) => cat.id === categoryId);
    if (categoryIndex !== -1) {
      categories.splice(categoryIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  app.get('/products', (req: Request, res: Response) => {
    const productName = req.query.name as string;
    if (productName) {
      const filteredProducts = products.filter((prod) => prod.name.toLowerCase().includes(productName.toLowerCase()));
      res.json(filteredProducts);
    } else {
      res.json(products);
    }
  });

  app.get('/products/category/:category', (req: Request, res: Response) => {
    const category = req.params.category;
    const productName = req.query.name as string;
    let filteredProducts = products.filter((prod) => prod.category === category);

    if (productName) {
      filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(productName.toLowerCase()));
    }

    res.json(filteredProducts);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
