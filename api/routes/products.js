const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        massage: 'Handeling GET Request to Produts'
    });
});
router.post('/',(req, res, next)=>{
    res.status(200).json({
         massage: 'Handeling POST Request to Produts'
    });
});

router.get('/:productId', (req, res, next)=>{
const id = req.params.productId;
if (id == 'speacial'){
    res.status(200).json({
        message: 'You got Speacial ID'
    });
} else {
    res.status(200).json({
        message: 'You passed ID'
    });
}
}
    )

module.exports = router;