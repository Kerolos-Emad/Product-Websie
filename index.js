var ProductContainer = [];


var productNameInp = document.getElementById("ProductName");

var productCompanyInp = document.getElementById("ProductCompany");

var productPriceInp = document.getElementById("ProductPrice");

var productDescInp = document.getElementById("ProductDesc");

var addBtn = document.getElementById("addBtn");

if (localStorage.getItem("ProductContainer") == null)
    {
        ProductContainer = [];
    }
else 
    {
        ProductContainer = JSON.parse(localStorage.getItem("ProductContainer"));
         Displaydata();
    }


addBtn.onclick = function()
{
 addProduct();
 Displaydata();
 clearData();

 
}

function addProduct()
{
      var product = 
        {
            Name:productNameInp.value,
            Price:productPriceInp.value,
            Company:productCompanyInp.value,
            Desc:productDescInp.value
        }
    ProductContainer.push(product);
    
    localStorage.setItem("ProductContainer",JSON.stringify(ProductContainer));
    
   
}
function Displaydata()
{
    var cols = "";
    
    for(var i = 0 ; i<ProductContainer.length ; i++)
        {
            cols+='<div class="col-md-3"><div class="products"><h3>'+ProductContainer[i].Name+'</h3><p class="text-info">'+ProductContainer[i].Price+'</p><p class="text-danger">'+ProductContainer[i].Company+'</p><p class="text-success">'+ProductContainer[i].Desc+'</p><button class="btn btn-danger" Onclick = "Deletedata('+i+')" >Delet</button><button class = "btn btn-info mx-2 " Onclick =UpdateData('+[i]+')  >Update</button></div></div>'
        }
    document.getElementById("RowData").innerHTML=cols;
}
function Deletedata(id)
{
    ProductContainer.splice(id,1);
    localStorage.setItem("ProductContainer",JSON.stringify(ProductContainer));
    Displaydata();
}
function UpdateData()
{
    
}

function clearData()
{
    var inputs = document.getElementsByClassName("form-control");
    for(var i = 0 ; i<inputs.length; i++)
        {
            inputs[i].value="";
        }
}






























