const express = require('express');
const mongoose = require('mongoose');
const AdminM = require('./models/admin');
const userM = require('./models/user');
const productM = require('./models/products');
const orderM = require('./models/orders');
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/IMS').then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.log(err);
}
);


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.post('/login', async (req, res) => {
    const user = await AdminM.find({ userID: req.body.email })
    if (user && req.body.email == user[0].userID && req.body.password == user[0].Password) {
        var token = jwt.sign({ email: user[0].userID }, 'IMS');
        res.json({
            success: true,
            token: token,
            msg: 'Loging succesfull'
        })
    }
    else {
        res.json({ success: false, msg: "Invalid userID or password" })
    }
});

app.post('/', async (req, res) => {
    console.log(req.body)
    const user = await AdminM.create({ userID: req.body.userID, Password: req.body.Password });
    res.json({
        success: true,
        msg: "account created"
    })
});

app.post('/user', async (req, res) => {
    console.log(req.body)
    try {
        const user = await userM.create({ Name: req.body.Name, Email: req.body.Email, ConatactNo: req.body.ConatactNo, address: req.body.address, });
    } catch (error) {
        res.json({
            success: false,
            msg: error.errorResponse.errmsg
        })
        return;
    }
    res.json({
        success: true,
        msg: "User added"
    })
});

app.get('/getuser', async (req, res) => {
    console.log(req.body)
    const name1 = req.body.Name;
    try {
        const user = await userM.find().sort({ _id: -1 });
        res.json({
            success: true,
            User: user
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
});

app.post('/product', async (req, res) => {
    console.log(req.body)
    try {
        const product = await productM.create({ Name: req.body.productName, Desc: req.body.Desc, Availqty: req.body.stock, price: req.body.price });
    } catch (error) {
        res.json({
            success: false,
            msg: error.errorResponse.errmsg
        })
        return;
    }
    res.json({
        success: true,
        data: req.body,
        msg: "Product added"
    })
}
);

app.post('/getproduct', async (req, res) => {
    console.log(req.body)
    const name1 = req.body.Name
    try {
        const product = await productM.find({
            $or: [
                { "Name": new RegExp(name1) }
            ]
        });
        res.json({
            success: true,
            Product: product
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
}
);

app.get('/getallproduct', async (req, res) => {
    try {
        const product = await productM.find().sort({ _id: -1 });
        res.json({
            success: true,
            Product: product
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
}
);


app.post('/updateproduct', async (req, res) => {
    console.log(req.body)
    const name1 = req.body.productName
    const qty1 = req.body.stock1
    const qty = parseInt(qty1)
    try {
        if (qty >= 0) {
            const product = await productM.updateOne({ Name: name1 }, { $inc: { Availqty: qty } });
            res.json({
                success: true,
                msg: "Product updated"
            })
        }
        else if (qty < 0) {
            const product = await productM.updateOne({ Name: name1 }, { $inc: { Availqty: qty } });
            res.json({
                success: true,
                msg: "Product updated"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
}
);

app.post('/order', async (req, res) => {
    console.log(req.body)
    try {
        const order = await orderM.create({ Cname: req.body.customerName, product: req.body.productName, qty: req.body.stock });
        res.json({
            success: true,
            msg: "Order added"
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
    
}
);

app.get('/getorder', async (req, res) => {
    try {
        const order = await orderM.find().sort({ _id: -1 });
        res.json({
            success: true,
            Order: order
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
}
);

app.get('/total', async (req, res) => {
    try {
        const order = await orderM.find().countDocuments();
        const product = await productM.find();
        const user = await userM.find();                
        res.json({
            success: true,
            Total: {order: order, product: product.length, user: user.length}
        })
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
        return;
    }
}
);


app.listen(1101, () => {
    console.log('app listening at http://localhost:1101');
}
);