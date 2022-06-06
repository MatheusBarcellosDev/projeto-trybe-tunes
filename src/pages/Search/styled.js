import styled from 'styled-components';

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a{
        text-decoration: none;
    }
  }

  .input-artist {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 150px;

    margin-top: 80px;

    form {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 25%;
      min-width: 180px;

      label {
        width: 100%;

        input {
          width: 100%;

          border: none;
          border-bottom: 1.3px solid #ccc;

          text-align: center;

          color: #444955;
          font-weight: bold;
          font-size: 16px;

          padding: 7px 11px;
        }

        input:focus{
            outline: none;
        }
      }

      button {
        padding: 7px 11px;
        margin-left: 10px;

        border: none;

        background-color: #2fc18c;
        color: #fff;
        transition: 0.3s;
      }

      button:hover{
            background-color: #036B52;
            cursor: pointer;
        }
    }
    }
  }

  .container-albums{
        max-width: 1200px;
        margin: 0 auto;

        h2 {
            font-size: 20px;
            font-weight: 300;
            color: #444955;
        }

        span{
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          font-size: 32px;
          margin-top: 50px;

          color: #444955;

          font-weight: bold;
        }

        .container-album-result {
            display: grid;
            grid-template-columns: repeat(auto-fill, 200px);
            grid-gap: 35px;

            /* padding: 25px; */
            margin-top: 30px;
            justify-content: center;


            .card-album{
                width: 220px;
                height: 250px;
                display: flex;
                flex-direction: column;

                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06)
                , 0px 1px 3px rgba(0, 0, 0, 0.1);
                border-radius: 6px;

                transition: 0.2s;



                .img-card img{
                    width: 100%;
                    height: 150px;
                    border-radius: 6px 6px 0 0;
                }

                .info-card{
                    padding: 10px;
                    overflow: auto;
                    overflow-x: hidden;

                    a{
                        text-decoration: none;
                        color: #444955;
                        
                        h3{
                            font-size: 16px;
                        }
                    }

                    p{
                        margin-top: 10px;
                        font-size: 10px;
                        font-weight: 300;

                        color: #3D495C;
                    }
                }

                .info-card::-webkit-scrollbar {
                     display: none;
                }

            }

            .card-album:hover{
                transform: scale(1.09);
            }

        }

  }
`;

export default Container;
