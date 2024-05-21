

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type IStudent = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencycontactNo: string;
  bloodGroup?: 'a+' | 'a-' | 'b+' | 'b-' | 'ab+' | 'ab-' | 'o+' | 'o-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGardian: LocalGardian;
  profileImg: string;
  isActive: 'active' | 'block';
};
