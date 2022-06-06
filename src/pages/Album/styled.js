import styled from 'styled-components';

const Container = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    .container-album{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        
        width: 100%;

        margin-top: 50px;

        .container-infos{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            

            .img-album{
                width: 220px;
                height: auto;
                

            }

            .img-album img{
                width: 100%;
                border-radius: 6px;
            }

            .title-album{

                text-align: left;
                margin-top: 20px;

                h3{
                font-size: 36px;
                font-weight: bold;
                color: #444955;
                }

                span{
                    font-size: 15px;
                    color: #ccc;
                    font-weight: bold;
                }

        }

            

        }

        .container-musics{
            width: 100%;
            height: 400px;
            overflow: auto;
            margin-top: 50px;

            border-top: 1px solid #E1E5EB;

           
        }

    }

`;

export default Container;
