/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";

const SplitBillForm = ({ selectedFriend, saveBill }) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : 0;

  const submitBill = (e) => {
    e.preventDefault();
    if (bill <= 0 || paidByUser <= 0) {
      return;
    }
    let paidBill = paidByFriend;
    if (whoIsPaying === "friend") {
      paidBill = paidByUser;
    }
    saveBill({ whoIsPaying, paidBill });
    setBill(0);
    setPaidByUser(0);
  };

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h4>Split A Bill With {selectedFriend?.name}</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submitBill}>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                <div className="form-group">
                  <label htmlFor="bill-value" className="mb-1">
                    Bill Value
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                <label htmlFor="paying-bill mb-1">Who is paying the bill</label>
                <div className="form-group mt-2">
                  <div className="form-check form-check-inline align-self-center">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="user"
                      checked={whoIsPaying === "user"}
                      onChange={(e) => setWhoIsPaying(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="user">
                      You
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="friend"
                      checked={whoIsPaying === "friend"}
                      onChange={(e) => setWhoIsPaying(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="friend">
                      {selectedFriend?.name}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                <div className="form-group">
                  <label htmlFor="your-expence" className="mb-1">
                    Your Expences
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    value={paidByUser}
                    onChange={(e) =>
                      setPaidByUser(
                        Number(e.target.value) > bill
                          ? paidByUser
                          : Number(e.target.value)
                      )
                    }
                  />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                <div className="form-group">
                  <label htmlFor="image-url" className="mb-1">
                    {selectedFriend?.name} Expences
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={paidByFriend}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2 text-end">
                <div className="form-group">
                  <Button btnClass="btn btn-outline-info">Split Bill</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SplitBillForm;
