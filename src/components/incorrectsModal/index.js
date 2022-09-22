import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { ImCross } from "react-icons/im"

const Index = ({ data, setModalOpen }) => {
  const [position, setPosition] = React.useState(0)

  return (
    <>
      <div
        className="modal-full"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="modal-main"
          style={{
            width: "80%",
            maxWidth: "500px",
            height: "600px",
            backgroundColor: "#0a0505",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            flexDirection: "column",
            textAlign: "center",
            boxShadow: "5px 4px 5px #232323",
            zIndex: "20",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-30px",
              marginBottom: "30px",
            }}
          >
            <ImCross
              style={{ cursor: "pointer" }}
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "50px",
              height: "500px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexDirection: "column",
                minHeight: "220px",
              }}
            >
              <h3 style={{ fontWeight: "300" }}>{data[position].enunciate}</h3>
              <h3 style={{ fontWeight: "300" }}>"{data[position].question}"</h3>
            </div>
            <div>
              <h2>Correct Answer: </h2>
              <p style={{ fontSize: "40px" }}> {data[position].correctAns}</p>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              fontSize: "26px",
            }}
          >
            <AiOutlineArrowLeft
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (position > 0) setPosition(position - 1)
              }}
            />
            <AiOutlineArrowRight
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (position < data.length - 1) setPosition(position + 1)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
