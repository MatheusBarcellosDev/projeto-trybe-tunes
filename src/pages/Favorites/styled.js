import styled from 'styled-components';

const Container = styled.div`

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        width: 100%;

        .container-favorites{
            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 80px;

            .list-favorites{
                width: 50%;
                height: 400px;
                overflow-y: scroll;
            
                .card-favorites{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;

                    img{
                        width: 50px;

                        margin-right: 35px;
                        border-radius: 50%;
                    }
                }
            }

            
            
        }
`;

export default Container;
