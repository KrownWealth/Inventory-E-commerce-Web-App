import { ProductsType } from "@/types";
import { ProductsData } from "@/json";


export async function fetchProductsPages({ query, page }: { query: string; page: number }) {
  const allProducts: ProductsType[] = ProductsData;


  const filteredProducts = allProducts.filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase()) ||
           product.category.toLowerCase().includes(query.toLowerCase());
  });

  
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Return paginated products and total pages
  return {
    data: paginatedProducts,
    pages: Math.ceil(filteredProducts.length / itemsPerPage),
  };
}