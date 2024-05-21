import { Request, Response } from 'express';
import { studentServicess } from './student.services';

// creat student 
const creatStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    //  here we call the services function
    const result = await studentServicess.creatStudentIntoDB(student);

    // here I am sending response to user
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    const errorMessage = (error as Error).message || 'Unknown error occurred';
    // sending error response
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the student',
      error: errorMessage,
    });
  }
};

// find student 
const getAllStudent = async(req: Request, res:Response) =>{
try {
  const result = await studentServicess.getAllStudentIntoDB()
// here I am sending response to user
res.status(200).json({
  success: true,
  message: 'Get all student  successfully',
  data: result,
});
} catch (error) {
  console.log(error);
  const errorMessage = (error as Error).message || 'Unknown error occurred';
  // sending error response
  res.status(500).json({
    success: false,
    message: 'An error occurred while get all student the student',
    error: errorMessage,
  });
}
}
export const studentControlars = {
  creatStudent,
  getAllStudent
};
