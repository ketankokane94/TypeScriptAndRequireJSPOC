export interface RequestInstanceVM {
    workflowInstanceStatus: string;
    originator : string;
    instanceFields: InstanceFields;
  }
  
 export interface InstanceFields {
    [Key:string]:InstanceFieldVM[];
  }
  
 export interface InstanceFieldVM {
  Value: number | string;
  Display_Name: string;
  name: string;
  system_name: string;
  DTFID: string;
  }

  // interface RootObject {
  //   workflowInstanceStatus: string;
  //   originator: string;
  //   instanceFields: InstanceFields;
  //   favoriteNumber: number;
  //   favoriteWord: string;
  // }
  
  // interface InstanceFields {
  //   Key: string;
  //   Value: Value[];
  // }
 