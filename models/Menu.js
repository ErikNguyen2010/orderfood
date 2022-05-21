import { DANH_SACH_FOOD, DANH_SACH_FOOD_BAI2 } from "../util/settings.js";
import { MonAnBai1} from "./MonAn.js";

export class MenuBai1{
    danhSachMonAn = [];
    constructor(){

    }
    themMonAn = (monAn) =>{
        let result = this.danhSachMonAn.push(monAn)
        return result;
    }
    deleteMonAn = (maMonAnClick) => {
        this.danhSachMonAn = this.danhSachMonAn.filter(monAn => monAn.maMonAn !== maMonAnClick)
        return this.danhSachMonAn;
    }
    luuStorage = () =>{
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_FOOD, sMangMonAn);
    }
    layStorage = () =>{
        if(localStorage.getItem(DANH_SACH_FOOD)){
            let sMonAn = localStorage.getItem(DANH_SACH_FOOD);
            this.danhSachMonAn = JSON.parse(sMonAn);
        }
        
    }
    renderTableMonAn = (selector) =>{
        let html = "";
        for(let index of this.danhSachMonAn){
            let monAn = new MonAnBai1()
            
            monAn = {...monAn, ...index}
            html +=
            `
                <tr>
                    <td>${monAn.maMonAn}</td>
                    <td>${monAn.tenMonAn}</td>
                    <td>${monAn.giaTien}</td>
                    <td>
                        <img alt="..." src="${index.linkAnh}" width="50" />
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick = "deleteMonAn('${monAn.maMonAn}')">Xóa</button>
                    </td>
                </tr>
            `
        }
        document.querySelector(selector).innerHTML = html
    }
}

let arrMonAn = [
    {maMonAn:1,tenMonAn:'Nước lẩu haidilao',giaTien:100},
    {maMonAn:2,tenMonAn:'Mì cay thành đô',giaTien:200},
    {maMonAn:3,tenMonAn:'Mực bạch ngọc',giaTien:300},
];
export class MenuBai2{
    danhSachMonAn = [];

    constructor(){

    }

    renderMenuMonAn = (selector) =>{
        let html = ""
        for(let index of arrMonAn){
            html += `
            <div class="row mt-3">
                <div class="col-3">${index.maMonAn}</div>
                <div class="col-3">${index.tenMonAn}</div>
                <div class="col-3">${index.giaTien}</div>
                <div class="col-3">
                <button class="bg-danger text-white btn" onclick="congMonAn('${index.maMonAn}')">+</button>
                <button class="bg-danger text-white btn" onclick="xoaMonAn('${index.maMonAn}')">-</button>
                </div>
            </div>
            `
        }
        document.querySelector(selector).innerHTML = html;
    }
    renderHoaDon = (selector) =>{
        let html = "";
        let totalPrice = 0
        for(let index of this.danhSachMonAn){
            totalPrice = index.soLuong * index.giaTien
            html += `
            <tr>
                <td>${index.maMonAn}</td>
                <td>${index.tenMonAn}</td>
                <td>${index.soLuong}</td>
                <td>${totalPrice}</td>
            </tr>
            `
        }
        document.querySelector(selector).innerHTML = html;
    }
    
    congMonAn = (maMonClick) =>{
        let result = this.danhSachMonAn.find(monAn => monAn.maMonAn == maMonClick)
        if(result){
            result.soLuong += 1;
        }else{
            let monAn = arrMonAn.find(mon => mon.maMonAn == maMonClick);
            this.danhSachMonAn.push({...monAn, soLuong: 1})
        }

    }
    xoaMonAn =(maMonClick) =>{
        let result = this.danhSachMonAn.find(monAn => monAn.maMonAn == maMonClick)
       
        if(result){
            if(!result.soLuong){
                return
            }
            result.soLuong += -1;
        }else{
            let monAn = arrMonAn.find(mon => mon.maMonAn == maMonClick);
            this.danhSachMonAn.push({...monAn, soLuong: 0})
        }
    }

    renderGiaTien = (selector) =>{
        let totalprice = 0;
        for(let index of this.danhSachMonAn){
            totalprice +=  index.soLuong * index.giaTien;
        }
        document.querySelector(selector).innerHTML = totalprice
    }
    luuStorage = () =>{
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_FOOD_BAI2, sMangMonAn)
    }
    layStorage = () =>{
        if(localStorage.getItem(DANH_SACH_FOOD_BAI2)){
            let sMangMonAn = localStorage.getItem(DANH_SACH_FOOD_BAI2);
            this.danhSachMonAn = JSON.parse(sMangMonAn)
        }
    }
}