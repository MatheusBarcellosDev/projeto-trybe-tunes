import styled from 'styled-components';

const Container = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    width: 100%;


    .players-music-group{
        display: flex;
        align-items: center;  
        gap: 10px;

        padding: 10px;

        border-bottom: 1px solid #E1E5EB;

        audio {
         filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
        }

        audio::-webkit-media-controls-play-button;

        .title-music{
            width: 100%;
            display: flex;
            justify-content: left;

            color: #444955;
            font-size: 13px;
            font-weight: bold;
        }

        .player-music{
            width: 100%;
        }

    }

        .favorite-music{
            width: 100%;
            display: flex;
            justify-content: center;

            label{
                color: white;
                margin-left: 15px;
            }
                

            /* Código retirado do video https://www.youtube.com/watch?v=jQuLIUZIG3k */

            input[type="checkbox"]{
                height: 16px;
                width: 16px;
                background-color: #dcd9c9;
                position: relative;
                outline: none;
                transform: rotate(45deg);
                -webkit-appearance: none;
            
            }
            input[type="checkbox"]:before{
                position: absolute;
                content: "";
                background-color: #dcd9c9;
                height: 60%;
                width: 100%;
                top: -52%;
                border-radius: 75px 75px 0 0;
               
            }
            input[type="checkbox"]:after{
                position: absolute;
                content: "";
                background-color: #dcd9c9;
                height: 60%;
                width: 100%;
                transform: rotate(-90deg);
                border-radius: 75px 75px 0 0;
                top: 20%;
                right: 72%;
            }
            input[type="checkbox"]:checked,
            input:checked[type="checkbox"]:before,
            input:checked[type="checkbox"]:after{
                background-color: #fe0f42;
            }
            
        }

        

    }

    
`;

export default Container;
