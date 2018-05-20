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
