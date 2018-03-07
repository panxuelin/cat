const Service=require('egg').Service;
class UserService extends Service{
    async find(uid){
        let user;
        // if (uid) {
        //      user = await this.app.mysql.get('cat_user', {id: uid});
        // } else {
        //      user = await this.app.mysql.select('cat_user');
        // }
        return {user};
    }
    async add({name,age,openId}){
        // const result=await this.app.mysql.insert('cat_user',{name:name,age:age,openId:openId,creatTime:new Date(),latestLoginTime:new Date()});
        // console.log(result);
        // console.log(result.affectedRows === 1);
        // if(result.affectedRows === 1){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return false;
    }
}
module.exports=UserService;