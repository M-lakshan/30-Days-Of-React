//Q1
const PersonAccount = {
  firstname: '',
  lastName: '',
  incomes: [],
  expences: [],
  totalIncome: function() {
    let tincm = 0;
    (this.incomes).forEach(income => {
      tincm += income[0];
    });
    return (this.incomes.length==0) ? 0 : tincm;
  },
  totalExpense: function() { 
    let texp = 0;
    (this.expences).forEach(expence => {
      texp += expence[0];
    });
    return (this.expences.length==0)? 0 : texp;
  },
  accountInfo: function() {
    let user_incm = this.totalIncome();
    let user_expn = this.totalExpense();

    return `\n${this.firstname+' '+this.lastName};\n
    Total Income: ${user_incm} | Total Expence: ${user_expn}\n
    Acc. Balance: ${user_incm-user_expn}`;
  },
  addIncome: function(latest_income,desc) {
    this.incomes.push([latest_income,desc]);
  }
}
console.log(PersonAccount);

const bankAcc = Object.assign({},PersonAccount);
bankAcc.firstname = "Kamal";
bankAcc.addIncome(4000,"fees");
bankAcc.expences.push([1200,"utility"]);

console.log(bankAcc.accountInfo());


//Q2
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    // likes: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

const SignIn = function(uname,pwd) {
  let user_sts = (users.filter(user => user.username==uname.toString() && user.password==pwd.toString()).length==1) ? true : false;
  users.map(user => (user.username==uname.toString() && user.password==pwd.toString()) ? user.isLoggedIn=true : user.isLoggedIn=false);
  return (user_sts) ? "Logged-In" : "Non-Existing-User";
}

console.log(SignIn('Alex','123123'));


//Q3
function rateProduct(index,rate) {
  let state = "Undefined Product";

  if(products.length>0) {
    if(typeof(index)=='number') {
      products[index].ratings.push(rate);
    } else {
      products.map(product => (product['_id']==index.toString()) ? product.ratings.push(rate) : product.ratings = product.ratings);
    }
    state = "Product Rated.";
  }

  return state;
}

function avgRating(index) {
  let rating = 0;

  if(products.length>0) {
    if(typeof(index)=='number') {
      (products[index].ratings).forEach(each_rating => rating += each_rating["rate"]);
      rating = rating/products[index].ratings.length;
    } else {
      products.map(product => (product['_id']==index.toString()) ?
        (product.ratings).forEach(each_rating => rating += each_rating["rate"]) : rating = rating
      );
      products.map(product => (product['_id']==index.toString()) ?
        rating = rating/product.ratings.length : rating = rating
      );
    }
  } else {
    rating = 'Undefined Product';
  }

  return rating;
}

console.log(rateProduct(2,{ userId: 'fg12cs', rate: 3.5 }));
console.log(rateProduct('hedfcg',{ userId: 'fg12ci', rate: 4.5 }));

console.log(AvgRating(2));
console.log(AvgRating('hedfcg'));


//Q4
function likeProduct(sts,index) {
  let count = 0;
  let like = "Undefined Product";

  if(products.length>0) {
    if(!typeof(index)=="number") {
      while(count<=products.length-1) {
        if(products[count]['_id']==index) {
          index = count;
          break;
        }
        count++;
      }
    }

    if(sts[0]) {
      products[count].likes.push(sts[1]);
      like = "Product liked.";
    } else {
      if(products[count]['likes'].includes(sts[1])) {
        if(products[count]['likes'].indexOf(sts[1])>0) {
          products[count]['likes'] = (products[count]['likes'].splice(0,products[count]['likes'].indexOf(sts[1]))).concat(
            (products[count]['likes'].indexOf(sts[1])+1,products[count]['likes'].length)
          );
        } else {
          products[count]['likes'] = (products[count]['likes'].splice(products[count]['likes'].indexOf(sts[1]),products[count]['likes'].indexOf(sts[1])+1))
            .concat((products[count]['likes'].indexOf(sts[1])+2,products[count]['likes'].length)
          );
        }
      }
      like = "Product unliked.";
    }
  }

  return like;
}

console.log(likeProduct([false,'fg12cy'],2));
console.log(likeProduct([true,'fg12cy'],'eedfcf'));