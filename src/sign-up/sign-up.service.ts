import { HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

interface SignUpProps {
  FirstName: string;
  LastName: string;
  ContactNumber: number;
  Email: string;
  PANNumber: string;
}

@Injectable()
export class SignUpService {
  private readonly signup: SignUpProps;

  getUser(req: Request, res: Response) {
    try {
      const id = req.body.id ? (req.body.id as string) : null;
    } catch (error) {
      return res.status(error?.status || HttpStatus.BAD_REQUEST).json({
        success: false,
        message: error?.message || 'Failed to get users',
      });
    }
  }
  xx;
  postUser(req: Request, res: Response) {}
}
