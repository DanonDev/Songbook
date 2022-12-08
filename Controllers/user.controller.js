import UserModel from '../Models/user.model.js'

class UserController {
    list = async (req, res) => {
        let {sortkey, sortdir, limit, atributes} = req.query
        const order = [sortkey ? sortkey: 'id']
        order.push(sortdir || 'ASC')
        limit: paserInt(limit) || 1000
        atributes = [atributes || 'id, firstname, lastname']


        const result = await UserModel.findAll({
            atributes: ['id' , 'firtsname', 'lastname'],
            oreder: [order],
            limit: limit
        })
        res.js(result)
    }

    detail = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            atributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'createAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }
}
export default UserController