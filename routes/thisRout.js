const express=require('express');
const path=require('path');
const router=express.Router();
const QRCode=require('qrcode');
router.get('/',(req, res) => {
    res.render('home');
})


router.post('/qrgenerator', async (req, res) => {
    const {text} = req.body;
    if(!text) {
        res.status(400).send('please enter string / url');
    } else {
        const qrImage = await QRCode.toDataURL(text);
        res.json({ qrImage });
    }
});

module.exports=router;