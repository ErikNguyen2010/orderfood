import { MenuBai1, MenuBai2 } from "../models/Menu.js"
import { MonAnBai1} from "../models/MonAn.js";


let menu1 = new MenuBai1();
menu1.layStorage();
menu1.renderTableMonAn('.tblDanhMucMonAn');

document.querySelector("#btnThem").onclick = function(){
    let monAn = new MonAnBai1();
    let arrFood = document.querySelectorAll(".form-group input");
    for(let index of arrFood){
        let {id,value} = index;
        monAn[id] = value;
    }
    menu1.themMonAn(monAn);
    menu1.renderTableMonAn('.tblDanhMucMonAn');
    menu1.luuStorage()
}

window.deleteMonAn = (maMonAnClick) =>{
    menu1.deleteMonAn(maMonAnClick);
    menu1.renderTableMonAn('.tblDanhMucMonAn');
    menu1.luuStorage();

}


let menu2 = new MenuBai2()

menu2.layStorage()
menu2.renderHoaDon("#tblHoaDon")
menu2.renderMenuMonAn("#showHere");

window.congMonAn = (maMonAnClick) =>{
    menu2.congMonAn(maMonAnClick);
    menu2.renderHoaDon("#tblHoaDon")
    menu2.renderGiaTien('#txtThanhTien')
    menu2.luuStorage();
}

window.xoaMonAn = (maMonClick) =>{
    menu2.xoaMonAn(maMonClick);
    menu2.renderHoaDon("#tblHoaDon");
    menu2.renderGiaTien('#txtThanhTien');
    menu2.luuStorage();


}