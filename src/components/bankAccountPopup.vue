<template>
    <!-- <div class="pop-Up-banner"></div> -->
    <div class="bank-account-popup-body">
        <label for="accName">AccountName</label>
        <input type="text" name="accName" required>

        <label for="accNum">AccountNumber</label>
        <input type="number" name="accNum" required>

        <label for="accCurrency">Currency</label>
        <select name="accCurrency" id="">
            <option value="mnt">MNT</option>
            <option value="usd">USD</option>
        </select>

        <label for="accBankName">Bank</label>
        <select name="accBankName" id="">
            <option>
                <div class="bankNameOption">
                    Төв монгол банк
                </div>
            </option>
            <option value="Капитал банк">
                Капитал банк
            </option>
            <option value="Худалдаа Хөгжлийн банк">
                Худалдаа Хөгжлийн банк
            </option>
            <option value="Хаан төв банк">
                Хаан төв банк
            </option>
            <option value="Голомт төв банк">
                Голомт төв банк
            </option>
            <option value="Хадгаламж ХХК дахь банкны ЭХА">
                Хадгаламж ХХК дахь банкны ЭХА
            </option>
            <option value="Тээвэр хөгжлийн банк">
                Тээвэр хөгжлийн банк
            </option>
            <option value="Ариг төв банк">
                Ариг төв банк
            </option>
            <option value="Кредит банк">
                Кредит банк
            </option>
            <option value="Үндэсний хөрөнгө оруулалтын банк">
                Үндэсний хөрөнгө оруулалтын банк
            </option>
            <option value="Капитрон банк">
                Капитрон банк
            </option>
            <option value="Хас банк">
                Хас банк
            </option>
            <option value="Чингис хаан банк">
                Чингис хаан банк
            </option>
            <option value="Төрийн банк">
                Төрийн банк
            </option>
            <option value="Хөгжлийн банк">
                Хөгжлийн банк
            </option>
            <option value="Богд банк">
                Богд банк
            </option>
            <option value="Төрийн сан">
                Төрийн сан
            </option>
            <option value="Үнэт Цаасны Төлбөр Тооц.Төв.Хад Төв">
                Үнэт Цаасны Төлбөр Тооц.Төв.Хад Төв
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .bank-account-popup-body {
        position: relative;
        display: grid;

        * {
            width: 100%;
        }

        label {
            margin-bottom: .5rem;
        }

        input {
            border: .5px solid #D9D9D9;
            outline: none;
            border-radius: .25rem;
            padding: .5rem;
            margin-bottom: 1rem;

            &:hover {
                border-color: #28AAEB;
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }

        select{
            border: .5px solid #D9D9D9;
            outline: none;
            border-radius: .25rem;
            padding: .5rem;
            margin-bottom: 1rem;

            option{
                padding: .5rem;
                border-radius: 0;
                
                .bankNameOption{
                    padding: .5rem;
                }
            }
        }
    }
</style>