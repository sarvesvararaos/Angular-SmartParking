export class MyordersModel {
    public id:number;
        public ChooseVehicleType:string;
        public ChooseParkingLevel:string;
        public ParkingDate:string;
        public ChooseParkingRow :string;
        public ChooseParkingSlot :string;
        public CustomerName :string;
        public PhoneNo :number;
        public VehicleNo :string;
            constructor(id:number,ChooseVehicleType:string,ChooseParkingLevel:string,ParkingDate:string,ChooseParkingRow:string,ChooseParkingSlot:string,CustomerName:string,PhoneNo:number,VehicleNo:string)
            {
                this.id=id,
                this.ChooseVehicleType=ChooseVehicleType,
                this.ChooseParkingLevel=ChooseParkingLevel,
                this.ParkingDate=ParkingDate,
                this.ChooseParkingRow=ChooseParkingRow,
                this.ChooseParkingSlot=ChooseParkingSlot,
                this.CustomerName= CustomerName ,
                this.PhoneNo=PhoneNo, 
                this.VehicleNo=VehicleNo
            }
    
    }
    

