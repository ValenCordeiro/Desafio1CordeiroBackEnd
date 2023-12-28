class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        const { title, description, price, thumbnail, code, stock } = product;

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const codeExists = this.products.some((existingProduct) => existingProduct.code === code);
        if (codeExists) {
            console.error("El código del producto ya existe");
            return;
        }

        const newProduct = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            return "Producto no encontrado"
        }
        return product;
    }
}

const manager = new ProductManager();