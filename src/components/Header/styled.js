import styled from 'styled-components';

const Container = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    width: 100%;
    height: 75px;

    background-color: #023031;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    

    .header-top {

        background-color: #023031;
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1200px;
        margin: 0 auto;
        height: 100%;


        position: relative;

        padding: 0 8px 8px 0;
       
    .logo{
        margin-left: 10px;
    }    

    .logo img{
        width: 100px;
    }

    .user{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;

        margin-top: 10px;

        gap: 5px;

        width: 135px;
        height: 38px;

        .icon{
            color: #2fc18c;
            margin-top: 3px;
            font-size: 25px;
        }

        .nameUser{ 
            font-size: 80%;
        }
    }

    }

    .links-navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        

        margin-top: 10px;

    

        li{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;

            width: 100%;

            gap: 10px;

            a{
                text-decoration: none;
                color: #2fc18c;
                padding: 10px 25px 10px 25px;

                width: 100%;

            }

            a:hover{
                background-color: #036B52;
                color: #fff;
            }

            .active{
                background-color: #036B52;
                color: #fff;
            }

           
            
        }

    }


`;

export default Container;
