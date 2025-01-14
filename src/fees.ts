import BigNumber from "big.js"
import { Asset } from "stellar-base"
import { TransferServer } from "./transfer-server"
import { WithdrawalType } from "./withdrawal"

export interface FeeResponse {
  /**
   * The total fee (in units of the asset involved) that would be charged to
   * deposit/withdraw the specified amount of asset_code.
   */
  fee: number
}

export async function fetchFee(
  transferServer: TransferServer,
  operation: "deposit" | "withdraw",
  type: WithdrawalType,
  asset: Asset,
  amount: BigNumber | string | number
): Promise<FeeResponse> {
  // const response = await transferServer.get<FeeResponse>("/fee", {
  //   params: {
  //     operation,
  //     type,
  //     asset_code: asset.code,
  //     amount: String(amount)
  //   }
  // })
  const response = await transferServer.get("/fee", {
    params: {
      operation,
      type,
      asset_code: asset.code,
      amount: String(amount)
    }
  })
  const data: any = response.json();

  return data
}
