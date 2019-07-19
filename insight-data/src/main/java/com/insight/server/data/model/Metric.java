package com.insight.server.data.model;

import lombok.Data;

@Data
public class Metric {
  private String field;
  private AggregationFunction aggregationFn;
  private String alias;
}
