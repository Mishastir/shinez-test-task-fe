import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { List, Table } from "antd";
import { Ads } from "../../@types";
import { renderCurrency, roundWithSymbol } from "../../utils";

export const AdsList: FunctionComponent<Record<string, unknown>> = () => {
  const [data, setData] = useState<Ads[]>([]);

  useEffect(() => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/ads`;
    axios.get(serverUrl)
      .then((response) => {
        setData(response.data);
      });

    // axios.patch(`${serverUrl}/62cf4afb246df51110873f69`, { status: "PAUSED" })
    //   .then((response) => {
    //     setData(response.data);
    //   });
  }, []);

  return (
    <List>
      <Table rowKey="id" dataSource={data}>
        <Table.Column dataIndex="ad_name" title="Ad name" />
        <Table.Column
          dataIndex="total_revs"
          title="Revenues"
          render={(value) => renderCurrency(value)}
        />
        <Table.Column dataIndex="total_spend" title="Spend" render={(value) => renderCurrency(value)} />
        <Table.Column dataIndex="total_profit" title="Profit" render={(value) => renderCurrency(value)} />
        <Table.Column dataIndex="total_sessions" title="Sessions" />
        <Table.Column dataIndex="total_paid_clicks" title="Paid Clicks" />
        <Table.Column dataIndex="total_page_views" title="Page Views" />
        <Table.Column dataIndex="cpc" title="CPC" render={(value) => renderCurrency(value)} />
        <Table.Column dataIndex="roas" title="ROAS" render={(value) => roundWithSymbol(value, "%")} />
      </Table>
    </List>
  );
};
