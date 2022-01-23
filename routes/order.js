const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Order = require("../models/Order")
const router = require("express").Router();

//Create
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            {
            $set: req.body
            }, 
            { new:true }
        );
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
});

//!Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted 😓")
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get User Order
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({userId: req.params.userId});
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get All

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
});


//Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1 ));
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() -1 ));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte:previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                },
            },
        ]);
        res.status(200).json(income)
    } catch (err) {
       res.status(500).json(err); 
    }
});




// //Get Order Stats
// router.get("/stats", async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const data = await Order.aggregate([
//             { $match: { createdAt: { $gte: lastYear} } },
//             {
//                 $project: {
//                     month: { $month : "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month", 
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);
//         res.status(200).json(data)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;