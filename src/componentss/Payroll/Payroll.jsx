import React, { useState } from "react";
import "./Payroll.css";
import logo from "../../assets/logo.jpeg";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
  } from '@chakra-ui/react'
  import {MdDraw} from 'react-icons/md'
function Payroll() {
  const [datalistSelect, selectDatalistSelect] = useState("Payroll");
  const dataList = [
    {
      title: "Payroll",
      description:
        "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    },
    {
      title: "Claim expense",
      description:
        "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    },
    {
      title: "VAT handling",
      description:
        "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    },
    {
      title: "Reporting",
      description:
        "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it",
    },
  ];

  const menuItem = [
    "Overview",
    "contacts",
    "Bills",
    "Expenses",
    "Banking",
    "Taxes",
    "Accounting",
  ];

  return (
    <div className="payroll">
      <div style={{ textAlign: "center", position: "relative", top: "120px" }}>
        <p style={{ color: "white", fontSize: "50px", fontWeight: 500 }}>
          Everything You need to run your books.
        </p>
        <p
          style={{
            color: "#cccc",
            fontSize: "14px",
            fontWeight: 500,
            marginTop: "10px",
          }}
        >
          Well everything you need if you arent that picky about mirror details
          like tax compliance.
        </p>
      </div>

      <div className="payroll__content">
        <div className="payroll__content--child">
          <div className="payroll__content--childleft">
            {dataList.map((itm) => (
              <div
                style={{
                  marginBottom: "8px",
                  padding: "20px 20px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
                className={
                  datalistSelect === itm?.title ? "payroll__selected" : null
                }
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  {itm?.title}
                </p>
                <p style={{ color: "white", fontSize: "12px" }}>
                  {itm?.description}
                </p>
              </div>
            ))}
          </div>
          <div className="payroll__content--childright">
            <div className="payroll__right-header">
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#ccc",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#ccc",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#ccc",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "40%",
                  border: ".4px solid #454545",
                  backgroundColor: "white",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#454545",
                }}
              >
                taxpal.com
              </div>
            </div>
            <hr></hr>
            <div
              style={{
                display: "flex",
                gap: "60px",
                backgroundColor: "aliceblue",
                height:'inherit',
                borderBottomLeftRadius: "20px",
              }}
            >
              <div>
                <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div style={{ display: "flex", fontWeight: 700 }}>
                      <p>Tax</p>
                      <p style={{ color: "#1967d2" }}>Pal</p>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                  {menuItem.map((itm, idx) => (
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "8px",
                        color: itm === "Accounting" && "rgb(25, 103, 210)",
                      }}
                    >
                      {itm}
                    </p>
                  ))}
                  <p style={{position:'relative',top:'300px',backgroundColor:'#cccc',borderRadius:'8px',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',padding:'7px 11px'}}
                  ><span><MdDraw/></span>
                    <span>Wireframe.inc</span></p>
                </div>
                
              </div>
              <div style={{backgroundColor:'white',width:'100%',marginTop:'25px',padding:'20px'}}>
                <p style={{marginLeft:'20px',marginBottom:'20px'}}>Payroll</p>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr style={{fontWeight:400}}>
                        <Th><Checkbox></Checkbox></Th>
                        <Th>Name</Th>
                        <Th>Total pay (per annum)</Th>
                        <Th>Tax <span style={{color:'lightgray'}}>20%</span></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>Statrcy bobb</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox defaultChecked></Checkbox></Td>
                        <Td>Derek  Forbes</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>Garth Lemew</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>LLIya Bodha</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>Bernath Timm</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>Statrcy bobb</Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                      <Tr>
                        <Td><Checkbox ></Checkbox></Td>
                        <Td>Daram carbb </Td>
                        <Td >$19000</Td>
                        <Td >$300</Td>
                      </Tr>
                    </Tbody>
                   
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payroll;
