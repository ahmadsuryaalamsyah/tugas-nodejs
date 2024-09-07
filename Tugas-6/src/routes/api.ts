import express, { Request, Response } from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Single file upload
router.post('/upload/single', upload.single('file'), (req: Request, res: Response) => {
  if (req.file) {
    res.json({
      message: 'Single file uploaded',
      url: req.file.path, // Menyimpan hanya path file yang diupload
    });
  } else {
    res.status(400).json({
      message: 'Tidak ada file yang diupload',
    });
  }
});

// Multiple file upload
router.post('/upload/multiple', upload.array('files', 10), (req: Request, res: Response) => {
  if (req.files) {
    const files = (req.files as Express.Multer.File[]).map((file) => ({
      filename: file.filename,
      path: file.path,
    }));
    res.json({
      message: 'Multiple files uploaded',
      files, // Menyimpan array file dengan nama dan path-nya
    });
  } else {
    res.status(400).json({
      message: 'Tidak ada file yang diupload',
    });
  }
});

export default router;
