import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  IStudent,
  LocalGardian,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGardianSchema = new Schema<LocalGardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studenSchema = new Schema<IStudent>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencycontactNo: { type: String, required: true },
  bloodGroup: ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'],
  permanentAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGardian: localGardianSchema,
  profileImg: {
    type: String,
  },
  isActive: ['active', 'block'],
});

export const Student = model<IStudent>('Student', studenSchema);
