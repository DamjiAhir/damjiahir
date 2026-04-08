// src/app/admin/products/page.tsx
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

// This function runs on the server
async function getProducts() {
  await connectDB();
  // We use .lean() to make the data lightweight JSON
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Product Inventory</h1>
          <p className="text-sm text-gray-500">Manage your catalog here</p>
        </div>
        
        <Link 
          href="/admin/products/new" 
          className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition"
        >
          <Plus size={18} />
          <span>Add Product</span>
        </Link>
      </div>

      {/* The Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
              <th className="px-4 py-3 border-b">Image</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Category</th>
              <th className="px-4 py-3 border-b text-right">Retail Price</th>
              <th className="px-4 py-3 border-b text-right">Wholesale</th>
              <th className="px-4 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  No products found. Click "Add Product" to start.
                </td>
              </tr>
            ) : (
              products.map((product: any) => {
                // --- FIX: GET PRICE FROM THE FIRST VARIANT ---
                const firstVariant = product.variants?.[0] || {};
                const retailPrice = firstVariant.retailPrice || 0;
                const wholesalePrice = firstVariant.wholesalePrice || 0;

                return (
                  <tr key={product._id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <img 
                        src={product.image || "/placeholder.png"} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded border"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {product.name}
                      {/* Show variant count if more than 1 */}
                      {product.variants?.length > 1 && (
                        <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">
                          +{product.variants.length - 1} more
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                        {product.category}
                      </span>
                    </td>
                    
                    {/* Display Price from First Variant */}
                    <td className="px-4 py-3 text-right text-gray-600">
                      ₹{retailPrice.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right text-green-600 font-bold">
                      ₹{wholesalePrice.toLocaleString()}
                    </td>
                    
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-3">
                        <button className="text-gray-400 hover:text-blue-600">
                          <Edit size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}