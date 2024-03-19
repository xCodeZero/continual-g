import {
  getUserTotalAmountCashout,
  getUserTotalCashout,
} from "@/lib/actions/cashout";
import { getUserTotalOrderStats } from "@/lib/actions/order";
import { getTotalAvailablePackages } from "@/lib/actions/package";
import {
  getUserTotalAmountEarnings,
  getUserTotalEarnings,
  getUserTotalTransactions,
} from "@/lib/actions/transaction";
import { error_response, success_response, validateToken } from "@/lib/utils";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const orderStats = await getUserTotalOrderStats(
      validatedToken?.userId as unknown as string
    );

    const packageStats = await getTotalAvailablePackages();

    const transactionStats = await getUserTotalTransactions(
      validatedToken?.userId as unknown as string
    );

    const userEarningsStats = await getUserTotalEarnings(
      validatedToken?.userId as unknown as string
    );

    const userEarningsAmountStats = await getUserTotalAmountEarnings(
      validatedToken?.userId as unknown as string
    );

    const userCashooutStats = await getUserTotalCashout(
      validatedToken?.userId as unknown as string
    );

    const userCashoutAmountStats = await getUserTotalAmountCashout(
      validatedToken?.userId as unknown as string
    );

    const stats = {
      orders: orderStats,
      totalPackages: packageStats,
      totalTransactions: transactionStats,
      totalEarnings: userEarningsStats,
      totalEarningsAmount: userEarningsAmountStats,
      totalCashout: userCashooutStats,
      totalCashoutAmount: userCashoutAmountStats,
    };

    return success_response(stats, "Statistics fetched successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
