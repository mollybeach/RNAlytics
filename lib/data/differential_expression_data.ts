/**
 * @title Differential Expression Data
 * @fileoverview Differential expression data
 * @path /lib/data/differential_expression_data.ts
 */

export interface DifferentialExpressionData {
  gene: string;
  logFC: number; // Log Fold Change
  pValue: number; // P-value
}

// Differential Expression Mock Data for Volcano Plot
export const differentialExpressionMockData: DifferentialExpressionData[] = [
  { gene: "TP53", logFC: 2.5, pValue: 0.001 },
  { gene: "BRCA1", logFC: -1.8, pValue: 0.02 },
  { gene: "EGFR", logFC: 1.2, pValue: 0.05 },
  { gene: "KRAS", logFC: -0.5, pValue: 0.15 },
  { gene: "AKT1", logFC: 3.0, pValue: 0.0001 },
  { gene: "MYC", logFC: 1.5, pValue: 0.003 },
  { gene: "PTEN", logFC: -2.0, pValue: 0.01 },
  { gene: "VEGFA", logFC: 2.2, pValue: 0.004 },
  { gene: "CDKN2A", logFC: -1.3, pValue: 0.02 },
  { gene: "BCL2", logFC: 1.8, pValue: 0.005 },
  { gene: "TP63", logFC: -0.7, pValue: 0.03 },
  { gene: "JUN", logFC: 2.1, pValue: 0.002 },
  { gene: "FOS", logFC: -1.1, pValue: 0.04 },
  { gene: "CCND1", logFC: 1.9, pValue: 0.006 },
  { gene: "MCL1", logFC: -2.3, pValue: 0.008 },
  { gene: "PTGS2", logFC: 1.4, pValue: 0.007 },
  { gene: "IL6", logFC: -1.6, pValue: 0.009 },
  { gene: "TNF", logFC: 2.4, pValue: 0.001 },
  { gene: "CXCL8", logFC: -0.9, pValue: 0.02 },
  { gene: "NFKB1", logFC: 1.7, pValue: 0.003 },
  { gene: "STAT3", logFC: -1.0, pValue: 0.05 },
  { gene: "HIF1A", logFC: 2.0, pValue: 0.004 },
  { gene: "SOD1", logFC: -1.4, pValue: 0.01 },
  { gene: "TP73", logFC: 1.6, pValue: 0.002 },
  { gene: "BAX", logFC: -2.1, pValue: 0.006 },
  { gene: "CASP3", logFC: 1.3, pValue: 0.007 },
  { gene: "CASP8", logFC: -1.2, pValue: 0.03 },
  { gene: "CDK4", logFC: 2.3, pValue: 0.005 },
  { gene: "CDK6", logFC: -1.5, pValue: 0.008 },
  { gene: "CCNE1", logFC: 1.8, pValue: 0.009 },
  { gene: "E2F1", logFC: -0.6, pValue: 0.04 },
  { gene: "RB1", logFC: 2.1, pValue: 0.001 },
  { gene: "P21", logFC: -1.9, pValue: 0.02 },
  { gene: "P53", logFC: 1.0, pValue: 0.05 },
  { gene: "GAPDH", logFC: -2.2, pValue: 0.003 },
  { gene: "ACTB", logFC: 1.4, pValue: 0.006 },
  { gene: "ALB", logFC: -1.3, pValue: 0.01 },
  { gene: "LDHA", logFC: 2.0, pValue: 0.004 },
  { gene: "LDHB", logFC: -1.1, pValue: 0.02 },
  { gene: "GLUT1", logFC: 1.9, pValue: 0.005 },
  { gene: "GLUT4", logFC: -1.5, pValue: 0.008 },
  { gene: "PKM", logFC: 1.7, pValue: 0.007 },
  { gene: "CPT1A", logFC: -0.8, pValue: 0.03 },
  { gene: "CPT1B", logFC: 2.2, pValue: 0.001 },
  { gene: "CPT2", logFC: -1.4, pValue: 0.02 },
  { gene: "ACSL1", logFC: 1.6, pValue: 0.004 },
  { gene: "ACSL3", logFC: -1.0, pValue: 0.05 },
  { gene: "ACSL4", logFC: 2.1, pValue: 0.003 },
  { gene: "ACSL5", logFC: -1.2, pValue: 0.01 },
  { gene: "ACSL6", logFC: 1.8, pValue: 0.006 },
  { gene: "FASN", logFC: -1.3, pValue: 0.02 },
  { gene: "SREBF1", logFC: 2.0, pValue: 0.004 },
  { gene: "SREBF2", logFC: -1.5, pValue: 0.008 },
  { gene: "HMGCR", logFC: 1.4, pValue: 0.007 },
  { gene: "HMGCS1", logFC: -1.1, pValue: 0.03 },
  { gene: "HMGCS2", logFC: 2.3, pValue: 0.005 },
  { gene: "LDLR", logFC: -1.6, pValue: 0.009 },
  { gene: "PCSK9", logFC: 1.5, pValue: 0.002 },
  { gene: "ABCA1", logFC: -2.0, pValue: 0.01 },
  { gene: "ABCG1", logFC: 1.8, pValue: 0.004 },
  { gene: "ABCG5", logFC: -1.3, pValue: 0.02 },
  { gene: "ABCG8", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP1A1", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP1A2", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP2A6", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP2B6", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP2C9", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP2C19", logFC: 1.6, pValue: 0.007 },
  { gene: "CYP3A4", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP3A5", logFC: 2.2, pValue: 0.001 },
  { gene: "CYP3A7", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4A11", logFC: 1.8, pValue: 0.005 },
  { gene: "CYP4A22", logFC: -1.4, pValue: 0.009 },
  { gene: "CYP4F2", logFC: 1.7, pValue: 0.003 },
  { gene: "CYP4F3", logFC: -1.0, pValue: 0.05 },
  { gene: "CYP4F8", logFC: 2.1, pValue: 0.004 },
  { gene: "CYP4F12", logFC: -1.2, pValue: 0.01 },
  { gene: "CYP4F13", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F14", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F15", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F16", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F18", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F19", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F20", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F21", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F22", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F23", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F24", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F25", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F26", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F27", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F28", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F29", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP4F30", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F31", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F32", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F33", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F34", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F35", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F36", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F37", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F38", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F39", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F40", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F41", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F42", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F43", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP4F44", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F45", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F46", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F47", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F48", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F49", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F50", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F51", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F52", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F53", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F54", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F55", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F56", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F57", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP4F58", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F59", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F60", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F61", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F62", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F63", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F64", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F65", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F66", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F67", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F68", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F69", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F70", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F71", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP4F72", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F73", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F74", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F75", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F76", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F77", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F78", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F79", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F80", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F81", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F82", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F83", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F84", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F85", logFC: -1.2, pValue: 0.02 },
  { gene: "CYP4F86", logFC: 2.0, pValue: 0.004 },
  { gene: "CYP4F87", logFC: -1.5, pValue: 0.008 },
  { gene: "CYP4F88", logFC: 1.4, pValue: 0.007 },
  { gene: "CYP4F89", logFC: -1.1, pValue: 0.03 },
  { gene: "CYP4F90", logFC: 2.3, pValue: 0.005 },
  { gene: "CYP4F91", logFC: -1.6, pValue: 0.009 },
  { gene: "CYP4F92", logFC: 1.5, pValue: 0.002 },
  { gene: "CYP4F93", logFC: -2.0, pValue: 0.01 },
  { gene: "CYP4F94", logFC: 1.8, pValue: 0.004 },
  { gene: "CYP4F95", logFC: -1.3, pValue: 0.02 },
  { gene: "CYP4F96", logFC: 2.1, pValue: 0.003 },
  { gene: "CYP4F97", logFC: -1.4, pValue: 0.01 },
  { gene: "CYP4F98", logFC: 1.9, pValue: 0.006 },
  { gene: "CYP4F99", logFC: -1.2, pValue: 0.02 },
];