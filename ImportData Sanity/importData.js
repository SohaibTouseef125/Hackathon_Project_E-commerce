"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sanityClient_js_1 = require("./sanityClient.js");
async function uploadImageToSanity(imageUrl) {
    try {
        // Fetch the image from the URL and convert it to a buffer
        const response = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        // Upload the image to Sanity
        const asset = await sanityClient_js_1.client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(), // Extract the filename from URL
        });
        // Debugging: Log the asset returned by Sanity
        console.log('Image uploaded successfully:', asset);
        return asset._id; // Return the uploaded image asset reference ID
    }
    catch (error) {
        console.error('❌ Failed to upload image:', imageUrl, error);
        throw error;
    }
}
async function importData() {
    try {
        // Fetch data from external API
        const response = await axios_1.default.get('https://template-0-beta.vercel.app/api/product');
        const products = response.data;
        // Iterate over the products
        for (const product of products) {
            let imageRef = '';
            // Upload image and get asset reference if it exists
            if (product.imagePath) {
                imageRef = await uploadImageToSanity(product.imagePath);
            }
            const sanityProduct = {
                _type: 'product',
                id: product.id,
                name: product.name,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageRef
                    }
                },
                price: parseFloat(product.price),
                description: product.description,
                discountPercentage: product.discountPercentage,
                isFeaturedProduct: product.isFeaturedProduct,
                stockLevel: product.stockLevel,
                category: product.category,
            };
            // Log the product before attempting to upload it to Sanity
            console.log('Uploading product:', sanityProduct);
            // Import data into Sanity
            await sanityClient_js_1.client.create(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);
        }
        console.log('✅ Data import completed!');
    }
    catch (error) {
        console.error('❌ Error importing data:', error);
    }
}
importData();
