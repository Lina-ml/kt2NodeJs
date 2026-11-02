import Perfume from "./models/Perfume.js"
import fileServece from "./fileServece.js";


class PerfumeController{
    async getPerfume(req, res){
        try {
            const perfume= await Perfume.find();
            res.json(perfume)
            console.log(perfume);
            
        } catch (error) {
            console.log("Ошибка при получении духов: " + error);
            
        }
       
    }
    async addPerfume(req, res){
        try {
            let  fileName = null;
            console.log(req.filles.image);
            if (req.files && req.files.image) {
                fileName  =   await  fileServece.saveFile(req.files.image)
                if(!fileName){
                    return res.send("Ошибка при добавлении файла "  , fileName )
                   }
            }
            const { name,fragrance,price,Volume,brand,Longevity} = req.body;
            const newPerfume = await Perfume.create({
                name,
                fragrance,
                price,
                Volume,
                brand,
                Longevity,
                image: fileName
            })
            await newPerfume.save();
            res.send("духи успешно добавлен!");
        } catch (error) {
            console.log("Ошибка при добавлении духов: " + error);
        }
        
    }
    async pathPerfume(req,res){
        try{
            const {id} = req.params
            // console.log(id);
            const { name,fragrance,price,Volume,brand,Longevity} = req.body;
            // console.log(name,fragrance,price,Volume,brand,Longevity);
            const UpdatePerfume = await Perfume.findByIdAndUpdate(id, { name,fragrance,price,Volume,brand,Longevity})
        
            if(!UpdatePerfume){
                res.send("духи не найдены!")
            }
        
            res.send("данные успешно изменены!")
           }catch(err){
            console.log("ошибка при изменение данных!" + err);
            
           }
    }
    async deletePerfume (req,res){
        try{
             const {id } = req.params
             console.log(id);
             
              const perfume = await  Perfume.findByIdAndDelete(id)
              res.send ("духи успешно удалены")
         }catch(err){
             console.log("ошибка при удаленнии" + err);
             
         }
    }
}
export default new PerfumeController()