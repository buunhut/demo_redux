import React, { Component } from "react";
import { connect } from "react-redux";

class ThemeUser extends Component {
  state = {
    arrSinhVien: [],

    sinhVien: { ma: "", ten: "", lop: "" },
  };
  handleTang = () => {
    const action = {
      type: "tang",
    };
    this.props.dispatch(action);
  };
  handleGiam = () => {
    const action = {
      type: "giam",
    };
    this.props.dispatch(action);
  };
  handleDangNhap = () => {
    const action = {
      type: "login",
      isLogin: !this.props.store.isLogin,
    };
    this.props.dispatch(action);
  };
  getInput = (event) => {
    let { id, value } = event.target;
    let sinhVien = { ...this.state.sinhVien };
    sinhVien[id] = value;
    this.setState({
      ...this.state.sinhVien,
      sinhVien: sinhVien,
    });
  };
  themSinhVien = () => {
    let sinhVien = { ...this.state.sinhVien };
    this.state.arrSinhVien.push(sinhVien);
    let arrSinhVien = [...this.state.arrSinhVien];
    const action = {
      type: "themsinhvien",
      sinhVien: sinhVien,
      arrSinhVien: arrSinhVien,
    };
    this.props.dispatch(action);
  };
  render() {
    let myStore = { ...this.props.store };
    console.log(myStore.arrSinhVien);
    return (
      <div className="container">
        <div style={{ color: myStore.isLogin ? "blue" : "black" }}>
          {myStore.isLogin ? "ThemeAdmin" : "ThemeUser"}
        </div>
        <div id="dangNhap">
          <span style={{ color: myStore.isLogin ? "blue" : "red" }}>
            {myStore.isLogin ? "Đăng nhập thành công" : "Đã đăng xuất"}
          </span>
          <button type="button" onClick={this.handleDangNhap}>
            {myStore.isLogin ? "Đăng xuất" : "Đăng nhập"}
          </button>
        </div>

        <div id="myNumber">
          <button type="button" onClick={this.handleGiam}>
            Giảm -
          </button>
          <span>My number: {myStore.number}</span>
          <button type="button" onClick={this.handleTang}>
            Tăng +
          </button>
        </div>
        <div id="myForm">
          <form>
            <div>
              <input id="ma" placeholder="Mã" onChange={this.getInput} />
            </div>
            <div>
              <input id="ten" placeholder="Tên" onChange={this.getInput} />
            </div>
            <div>
              <input id="lop" placeholder="Lớp" onChange={this.getInput} />
            </div>
            <button type="button" onClick={this.themSinhVien}>
              Thêm sinh viên
            </button>
          </form>
        </div>
        <div id="thongBao">
          <p>Đây là sinhVien trong redux</p>
          <span>Mã SV: {myStore.sinhVien.ma}</span>
          <p>Tên SV: {myStore.sinhVien.ten}</p>
          <p>Lớp: {myStore.sinhVien.lop}</p>
        </div>

        <div id="myTable">
          <p>Đây là arrSinhVien từ Redux đỗ ra</p>
          <table>
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tên</th>
                <th>Lớp</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {myStore.arrSinhVien.map((item, index) => {
                let { ma, ten, lop } = item;
                return (
                  <tr key={index}>
                    <td>{ma}</td>
                    <td>{ten}</td>
                    <td>{lop}</td>
                    <td>Xóa/Sửa</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    store: state.store,
  };
};
const goiDuLieuTuRedux = connect(mapStateToProps)(ThemeUser);
export default goiDuLieuTuRedux;
