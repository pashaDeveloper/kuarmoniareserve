import { addCategory ,getCategories,softDeleteCategory} from "@/controllers/category.controller";

export const config = {
  api: {
    bodyParser: true,  
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const result = await addCategory(req);
        res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
      break;

    case "GET":
      try {
        const result = await getCategories(req);
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({
          success: false,
          error: error.message,
        });
      }
      break;
       case "PATCH":
      try {
        const result = await softDeleteCategory(req);
        
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    default:
      return res.status(405).json({
        success: false,
        message: "Method not allowed",
      });
  }
}

