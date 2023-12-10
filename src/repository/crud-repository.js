class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
        }
    }

    async update(data, id){
        try {
            const result = await this.model.findByIdAndUpdate(data, {_id : id}, {new : true});
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
        }
    }

    async destroy(id){
        try {
            await this.model.deleteOne({
                _id : id
            });
            return true;
        } catch (error) {
            console.log('something went wrong in crud repository');
        }
    }
}

module.exports = CrudRepository;