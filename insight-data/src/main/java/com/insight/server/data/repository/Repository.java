package com.insight.server.data.repository;

import java.util.List;

import com.insight.server.data.model.DatasetAttribute;
import com.insight.server.data.model.Query;
import com.insight.server.data.model.QueryResult;

public interface Repository {
  public boolean validate(String datasource, Query query);

  public QueryResult execute(String datasource, Query query) throws QueryException;

  public List<DatasetAttribute> getDefinition(String datasource) throws QueryException;
}