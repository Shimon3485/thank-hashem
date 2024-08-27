import ListGroup from "./comopnents/ListGroup";
import Button from "./comopnents/Button";
import DashBoard from "./comopnents/DashBoard";
import { useState } from "react";
import produce from "immer";
import brochos from "./brochosList";
import Progress from "./comopnents/Progress";
import Heading from "./comopnents/Heading";
import Reset from "./comopnents/Reset";
import Model from "./comopnents/Model";
import DoneList from "./comopnents/DoneList";
import Alert from "./comopnents/Alert";

function App() {
  let [totalBrochos, setTotalBrochos] = useState(0);
  let [brochosList, setBrochos] = useState(brochos);
  let [currentBrocha, setCurrentBrocha] = useState();
  let [fullBrocha, setFullBrocha] = useState("");
  let [max, setMax] = useState(0);
  let [showAlert, setShowAlert] = useState(false);
  let [reset, setReset] = useState(false);
  const [show, setShow] = useState(false);

  const totalB = function () {
    let total = 0;
    // @ts-ignore
    brochos.map((b) => (total += b.count * b.value));
    return total;
  };

  const handleClose = () => setShow(false);

  const handleSelectItem = (item: any) => {
    setReset(false);
    setCurrentBrocha(item.name);
    setMax(item.maxPerDay);
  };

  const handleFull = (item: any) => {
    setFullBrocha(item.full);
    setShow(true);
    console.log(item.full);
  };

  return (
    <>
      <Heading />

      <DashBoard total={totalBrochos} message={""} />

      <Reset
        onReset={() => {
          setTotalBrochos(0);
          setBrochos(
            brochosList.map((i) => (i.count !== 0 ? { ...i, count: 0 } : i))
          );
          setReset(true);
        }}
      >
        Restart
      </Reset>

      <div className="container">
        <div className="row">
          {/* Left Side: ListGroup */}
          <div className="col-md-6 mb-3">
            <div className="border rounded p-3">
              <Model
                show={show}
                handleClose={handleClose}
                messageText={fullBrocha}
                titleText="סידור"
              />
              <Model
                show={showAlert}
                handleClose={() => {
                  setShowAlert(false);
                }}
                messageText={`The maximum for this brocha, per day is ${max}`}
                titleText={"Maximum reached!!"}
              />
              <ListGroup
                reset={reset}
                onClickBook={handleFull}
                items={brochosList}
                heading="Brochos list"
                onSelectItem={handleSelectItem}
                btnAddClick={(item) => {
                  if (item.count === item.maxPerDay) {
                    setShowAlert(true);
                  } else {
                    setTotalBrochos(totalBrochos + item.value);
                    setBrochos(
                      brochosList.map((bracha) =>
                        bracha.name === currentBrocha
                          ? { ...bracha, count: bracha.count + 1 }
                          : bracha
                      )
                    );
                  }
                }}
                btnSubClick={(count) => {
                  if (totalBrochos !== 0) {
                    setTotalBrochos(totalBrochos - count);
                    setBrochos(
                      brochosList.map((bracha) =>
                        bracha.name === currentBrocha && bracha.count !== 0
                          ? { ...bracha, count: bracha.count - 1 }
                          : bracha
                      )
                    );
                  }
                }}
              />
            </div>
          </div>

          {/* Right Side: DoneList */}
          <div className="col-md-6 mb-3">
            <div className="border rounded p-3">
              <DoneList heading="My brochos" items={brochosList} />
            </div>
          </div>
        </div>
      </div>

      <Progress percent={totalBrochos} />
    </>
  );
}

export default App;

//////////////////////////////////////
//old code

// import ListGroup from "./comopnents/ListGroup";
// // import Alert from "./comopnents/alert";
// import Button from "./comopnents/Button";
// import DashBoard from "./comopnents/DashBoard";
// import { useState } from "react";
// import produce from "immer";
// import brochos from "./brochosList";
// import Progress from "./comopnents/Progress";
// import Heading from "./comopnents/Heading";
// import Reset from "./comopnents/Reset";
// import Model from "./comopnents/Model";
// import DoneList from "./comopnents/DoneList";

// function App() {
//   let [totalBrochos, setTotalBrochos] = useState(0);
//   let [brochosList, setBrochos] = useState(brochos);
//   let [currentBrocha, setCurrentBrocha] = useState();
//   let [fullBrocha, setFullBrocha] = useState("");

//   const totalB = function () {
//     let total: number = 0;
//     brochos.map((b) => (total = total + b.count * b.value));
//     return total;
//   };

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const handleSelectItem = (item: any) => {
//     console.log(item);
//     setCurrentBrocha(item.name);
//   };
//   const handleFull = (item: any) => {
//     setFullBrocha(item.full);
//     setShow(true);
//     console.log(item.full);
//     // alert(item.full);
//   };

//   return (
//     <>
//       <Heading></Heading>

//       <DashBoard total={totalBrochos}></DashBoard>

//       <Reset
//         children="Reset"
//         onReset={() => {
//           setTotalBrochos(0);
//           setBrochos(
//             brochosList.map((i) => (i.count !== 0 ? { ...i, count: 0 } : i))
//           );
//         }}
//       ></Reset>

//       <div>
//         <Model show={show} handleClose={handleClose} brochaText={fullBrocha} />

//         <ListGroup
//           onClickText={handleFull}
//           items={brochosList}
//           heading=" list ברכות"
//           onSelectItem={handleSelectItem}
//           btnAddClick={(count) => {
//             setTotalBrochos(totalBrochos + count);
//             setBrochos(
//               brochosList.map((bracha) =>
//                 bracha.name === currentBrocha
//                   ? { ...bracha, count: bracha.count + 1 }
//                   : bracha
//               )
//             );
//           }}
//           btnSubClick={(count) => {
//             totalBrochos !== 0 && setTotalBrochos(totalBrochos - count);

//             setBrochos(
//               brochosList.map((bracha) =>
//                 bracha.name === currentBrocha && bracha.count !== 0
//                   ? { ...bracha, count: bracha.count - 1 }
//                   : bracha
//               )
//             );
//           }}
//         />
//       </div>
//       <DoneList heading="My brochos" items={brochosList}></DoneList>
//       <Progress percent={totalBrochos}></Progress>
//     </>
//   );
// }
// export default App;
