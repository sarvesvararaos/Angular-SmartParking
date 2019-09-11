export class Model {
    public id:number;
    public Username:string;

    public Email :string;
    public  Password :string;
    public  ConfirmPassword :string;
        constructor(id:number,Username:string,Email:string,Password:string,ConfirmPassword:string)
        {
            this.id=id;
            this.Username=Username,
            this.Email=Email,
            this.Password=Password,
            this.ConfirmPassword=ConfirmPassword

        }

}
