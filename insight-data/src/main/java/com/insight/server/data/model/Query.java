package com.insight.server.data.model;

import java.util.List;

import lombok.Data;

@Data
public class Query {
  private List<Metric> metrics;
  private List<String> bucket;
  private List<String> order;
}