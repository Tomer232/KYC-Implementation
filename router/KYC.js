import { Router } from "express";
import { 
  verify, 
  check, 
  getStatus,  
  batchVerify, 
  approvePendingVerification, 
  getPendingVerificationCount 
} from '../controllers/KYC.js';

const router = Router();

router.post('/verify', verify);              // 1. Verify user
router.get('/status/:userAddress', getStatus); // 2. Check if verified


router.post('/check', check);
router.post('/batch-verify', batchVerify);
router.post('/approve-pending', approvePendingVerification);
router.post('/pending-count', getPendingVerificationCount);

export default router;

//After updates
